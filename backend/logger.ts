import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf } = format;

const logFormat = printf(({ level, message, timestamp }) => {
   return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const logger = createLogger({
   format: combine(
      timestamp(),
      logFormat
   ),
   transports: [
      new transports.File({ filename: 'logs/info.log', level: 'info' }),
      new transports.File({ filename: 'logs/debug.log', level: 'debug' }),
      new transports.File({ filename: 'logs/error.log', level: 'error' })
   ]
});

if (process.env.NODE_ENV !== 'production') {
   logger.add(new transports.Console({
      format: format.simple(),
   }));
}

export default logger;
