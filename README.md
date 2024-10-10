## PART1:
 
 URL FOR MY HOME PAGE : https://swe645-p1-sv.s3.us-east-2.amazonaws.com/homepage.html


 ## steps to create a s3 bucket 
 1. login to aws console 
 2. search for s3 and open it 
 3. click on create butcket button
 4. give the bucket a globally unique name 
 5. Uncheck the block public access checkbox
 6. Aknowledge that you are okay with public access
 7. click on create bucket
 8. upload your files 
 9. Then go into the bucket and go-to properties edit the static website hosing .
 10. enable the static website hosting and give the name of your index file  and click save.
 11. Now go-to permissions and edit the bucket policy to this :
        {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::Bucket-name/*"
        }
    ]
}
12.now click on you index file and you will see a link for the static website you are hosting.

## PART2:

URL FOR THE SURVEY PAGE: http://18.223.166.230/


## STEPS TO CREATE A EC2 INSTANCE DEPLOY OUR WEBPAGE:
1. login to aws console 
2. goto ec2 dashboard 
3. click launch an instance 
4. give it a name 
5. give it an ami i used ubuntu 
6. select an instance type i used t2.micro.
7. give it a key-pair value (optional)
8. give security groups:
    ssh:port-22
    http:port-80
9. now launch instance 
10. after i shows runnung we can click on our instace
11. click on connect and connect to the console
12. Deployment:
    1. i have used apache2 server to deploy 
        command: sudo apt-get install apache2
    2. I have used winScp tool to upload my files.
    3. Now replace the contents of /var/www/html/.index.html files with our files 
        command: cp -r myfilename /var/www/html/
    4. now your webpage is deployed and you can check that at http//your_public_ip
    