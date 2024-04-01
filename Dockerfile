FROM ubuntu:20.04
RUN sudo apt update && sudo apt install apache2 -y 
COPY index.html /var/www/html/
CMD ["apache2ctl" , "-D" , "FOREGROUND"]
