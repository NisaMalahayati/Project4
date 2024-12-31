# Menggunakan NGINX sebagai base image
FROM nginx:latest

# Menyalin semua file dari folder proyek ke dalam container
COPY . /usr/share/nginx/html

# Expose port 80 agar bisa diakses
EXPOSE 80

# Salin file konfigurasi default.conf ke dalam container
COPY default.conf /etc/nginx/conf.d/default.conf
