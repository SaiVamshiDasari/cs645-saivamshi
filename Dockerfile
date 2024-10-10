# Use the official Ubuntu image
FROM ubuntu:latest

# Install Apache2
RUN apt-get update && \
    apt-get install -y apache2 && \
    apt-get clean

# Copy your application files to the Apache default directory
COPY . /var/www/html/

# Expose port 80 for Apache
EXPOSE 80

# Start Apache when the container launches
CMD ["apache2ctl", "-D", "FOREGROUND"]
