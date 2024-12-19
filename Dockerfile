FROM node:20-slim

WORKDIR /home/node/app

# Keeps the container running
CMD ["tail", "-f", "/dev/null"]