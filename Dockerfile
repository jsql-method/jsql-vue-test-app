FROM node:11 as builder

WORKDIR /build

ADD . /build
RUN npm install && \
    npm install -g @angular/cli grunt && \
    grunt copy-hash && \
    npm run build && \
    grunt revers


FROM nginx:stable-alpine
COPY cicd/nginx/default.conf /etc/nginx/conf.d/default.conf
RUN rm -rfv /usr/share/nginx/html/*
COPY --from=builder /build/dist /usr/share/nginx/html/
