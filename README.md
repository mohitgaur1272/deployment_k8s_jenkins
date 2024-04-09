# first of all download certbot package on your handling server
## then configure with aws 
```
sudo apt-get install python3-certbot-dns-route53
```
```
sudo -i 
```
```
aws configure
```
## give access_key and secret_key
## then run this command 
```
certbot certonly --dns-route53 -d example.com -d *.example.com
```
## replace example.com with your domain name 
## after that you will se this output
```
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Found credentials in shared credentials file: ~/.aws/credentials
Plugins selected: Authenticator dns-route53, Installer None
Cert not yet due for renewal

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:

   /etc/letsencrypt/live/example.com/fullchain.pem

   Your key file has been saved at:

   /etc/letsencrypt/live/example.com/privkey.pem

   Your cert will expire on 2024-07-08. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```
### in this output given location your certificate and key are store 
```
/etc/letsencrypt/live/example.com/fullchain.pem
/etc/letsencrypt/live/example.com/privkey.pem
```
### run this command for give appropiet permssion or your ubuntu user 
```
sudo chown -R ubuntu:ubuntu /etc/letsencrypt/
```
### after that 
## Create Kubernetes Secret:
### Kubernetes uses secrets to store sensitive data like SSL certificates. You'll need to create a Kubernetes Secret to store your SSL certificate and key. Here's an example command to create a Secret by this command
```
kubectl create secret tls <secret-name> --cert=path/to/certificate.crt --key=path/to/private.key
```
### replace your desired secret name and replace with actual path 
## Modify Kubernetes Service: 
### Update your Kubernetes service to use the SSL certificate stored in the Secret. You need to add the annotation service.beta.kubernetes.io/aws-load-balancer-ssl-cert to specify the Secret containing the SSL certificate, and service.beta.kubernetes.io/aws-load-balancer-ssl-ports to specify the ports on which SSL termination should occur. Here's an example:
```
apiVersion: v1
kind: Service
metadata:
  name: <service-name>
  annotations:
    service.beta.kubernetes.io/aws-load-balancer-ssl-cert: "<secret-name>"
    service.beta.kubernetes.io/aws-load-balancer-ssl-ports: "443"
spec:
  ...
```


