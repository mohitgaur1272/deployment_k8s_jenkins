FROM ubuntu

RUN  apt update && apt install -y apache2

COPY . /var/www/html/

CMD ["apache2ctl" , "-D" , "FOREGROUND"]
