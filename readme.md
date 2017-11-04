############################
v1.0

--after changing sites-enabled of nginx conf, especially assigning new application listening ports etc.,
do not restart nginx with /etc/init.d/nginx restart, but kill process manually and then start nginx again

 ps aux | egrep '(PID|nginx)'
 kill -HUP 9831

/etc/init.d/nginx start