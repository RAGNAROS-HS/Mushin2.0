FROM nginx:alpine

COPY index.html styles.css app.js /usr/share/nginx/html/
COPY projects/ /usr/share/nginx/html/projects/
COPY img/ /usr/share/nginx/html/img/
COPY pdfs/ /usr/share/nginx/html/pdfs/

EXPOSE 80
