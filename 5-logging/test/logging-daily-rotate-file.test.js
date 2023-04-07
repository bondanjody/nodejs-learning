import DailyRotateFile from "winston-daily-rotate-file";
import winston from "winston";

test("logging with daily rotate file", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        filename: "daily-rotate-file.log",
        zippedArchive: true,
        maxSize: "1m",
        maxFiles: "14d",
      }),
    ],
  });

  for (let i = 0; i < 100000; i++) {
    logger.info(`Hello World ke: ${i}`);
  }
});
