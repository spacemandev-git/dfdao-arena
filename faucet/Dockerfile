FROM oven/bun:latest

WORKDIR /app

COPY . /app

RUN bun install

RUN bun run build

EXPOSE 3000

CMD ["bun", "build/index.js"]