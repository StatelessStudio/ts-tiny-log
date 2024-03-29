# ts-tiny-log

## Installation

`npm i ts-tiny-log`

```typescript
import { log } from 'ts-tiny-log/default';

log.info('Test!');
```

## Basic Usage

There are 5 log-levels, `fatal`, `error`, `warn`, `info`, and `debug`. Each one accepts any number of arguments, and also accepts any type of variable, object, array, error, etc.

```typescript
import { log } from 'ts-tiny-log/default';

// info level with a string variable
log.info('Hello, ', env.APP_TITLE);

// debug level with an object variable
log.debug({ foo: 'bar' });

try {
	something();
}
catch (e) {
	// error level with an Error variable
	log.error('Something broke!', e);
}
```

## Settings

Configure the log by creating a new instance. Export this so you can import your custom logger in your application.

`src/log.ts`
```typescript
import { Log } from 'ts-tiny-log';

export const log: Log = new Log({
	shouldWriteTimestamp: false
});
```

### level
Set the level that will be logged. Any level below this will also be logged. For example, setting the level to `warn` means that only `fatal`, `error,` and `warn` entries will be displayed. `info` and `debug` will be ignored.

**Default Value:** `LogLevel.info`

**Example:**

```typescript
import { Log } from 'ts-tiny-log';
import { LogLevel } from 'ts-tiny-log/levels';

export const log: Log = new Log({
	// Set the level to warn
	level: LogLevel.warn
});

log.fatal('will be displayed');
log.error('will be displayed');
log.warn('will be displayed');
log.info('will be ignored');
log.debug('will be ignored');
```

Output:
```
2022-01-17T12:59:24.115Z | fatal | will be displayed
2022-01-17T12:59:24.118Z | error | will be displayed
2022-01-17T12:59:24.118Z | warn  | will be displayed
```

---

### shouldWriteTimestamp
Turn on/off timestamp column per log entry

**Default Value:** `true`

**Example:**

`src/log.ts`
```typescript
import { Log } from '../src';

export const log: Log = new Log({
	// Don't write timestamps
	shouldWriteTimestamp: false
});

log.info('without timestamps');
```

Output:
```
info  | without timestamps
```

---

### shouldWriteLogLevel

**Description:**
Turn on/off log-level column per log entry

**Default Value:** `true`

**Example:**

```typescript
import { Log } from '../src';

export const log: Log = new Log({
	// Don't write log-level
	shouldWriteLogLevel: false
});

log.info('without log-level');
```

Output:
```
2022-01-17T13:16:50.157Z | without log-level
```

---

### shouldWriteThreadId & threadId

**Description:**
Enable a threadId column for each log entry. Use the optional `threadId` option if you would like to specify a custom thread id, otherwise the threadId from node worker_threads is used.

**Default Value:** `false`

**Example:**

```typescript
import { Log } from '../src';

export const log: Log = new Log({
	// Add thread id
	shouldWriteThreadId: true,
});

log.info('with thread id');
```

Output:
```
2022-01-17T13:16:50.157Z | info  | main	| with thread id
```

---

### metadataFormat
Determines how metadata columns (such as log-level and timestamp) are displayed.

**Default Value:** Piped columns:
```typescript
(str) => `${str} |`
```

**Example:**

```typescript
import { Log } from '../src';

export const log: Log = new Log({
	// Use square brackets for columns
	metadataFormat: str => `[${str.trim().toUpperCase()}]`
});

log.info('uppercase with square brackets');
```

Output:
```
[2022-01-17T13:21:15.224Z] [INFO] uppercase with square brackets
```

---

### standardOut & standardError
Stream log output to a custom function.

**Default value:** stdout (standardOut) and stderr (standardError)

**Example**
In this example, output will be streamed to a file via a custom `streamToFile()` function:

```typescript
import { Log } from '../src';
import { appendFileSync } from 'fs';

/**
 * Our custom streamToFile function
 * 
 * @param ...data Array of data. Each element in the array is a column of the line.
 */
function streamToFile(...data: any[]): void {
	appendFileSync('test.log', data.join(' ') + '\n');
}

// Set our custom Log
export const log: Log = new Log({
	standardOut: streamToFile,
	standardError: streamToFile,
});

log.info('with custom output stream');
```

`test.log`:
```
2022-01-17T15:34:26.807Z | info  | with custom output stream
```

---
