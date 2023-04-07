import winston from "winston";

test("logging with format", () => {
  const logger = winston.createLogger({
    level: "info",
    // Nilai default format : winston.format.json()
    // format: winston.format.simple(),
    format: winston.format.logstash(),
    transports: [new winston.transports.Console({})],
  });

  logger.info("Hello World!");
});

// Membuat format sendiri
test("logging with custom format", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.printf((info) => {
      return `${new Date()} : ${info.level.toUpperCase} : ${info.message}`;
    }),
    transports: [new winston.transports.Console({})],
  });

  logger.info("Hello World!");
});
