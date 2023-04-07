import winston from "winston";

test("logging with combine format", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [new winston.transports.Console({})],
  });

  logger.error("Hello World!");
  logger.warn("Hello World!");
  logger.info("Hello World!");
});

// NOTE : ada beberapa format yang tidak bisa berdiri sendiri, contoh : timestamp()
// NOTE : urutan di dalam function combine tidak boleh sembarangan, lihat docs
