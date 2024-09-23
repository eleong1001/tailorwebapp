# 👷WebApp Work-in Progress👷
  - Plan to permanately host website by Winter 2024
  - Frontend files hosted via github pages on custom url:
    - [Check it out here!!!](https://reteltailor.xyz)

# Summary
Hello y'all, this is a MERN stack website (MongoDB, Express, React, NodeJs) I am working on for my personal tailor and alterations business.
I hope to make this website publicaly accessible and allow users to submit requests for personal sewing jobs. This site was previously hosted via AWS EC2. Due to cost barriers, the EC2 instance was stopped.

The backend connection to MongoDB is functional when ran locally, and uses Node and Express Js to send JSON data to a personal MongoDB table configured with .env variables. Currently working on making post request possible for public users.

# Updates
9/20/24
  - Static files are currently being hosted on GitHub Pages - https://reteltailor.xyz
  - Currently building authentication features to enable backend to public users
  - Planning to host final website on Vercel, AWS, or Heroku

9/1/24
  - Created an EC2 Ubuntu Instance with AWS Free Tier and utilized PM2 and Nginx to successfully and publically host this website.
  - Instance stopped to finalize deployment code changes and create authentication for user-submitted requests.
  - Trying to find a cheaper alternative to AWS EC2 for when Free Tier runs out.
  
# Inspo:
  - I used an assortment of youtube videos to help create a working and interactive site
  - Links: 
    - ["React Website Tutorial - Beginner React JS Project Fully Responsive" - Brian Design](https://www.youtube.com/watch?v=I2UBjN5ER4s&t=178s)
    - ["React Tutorial for Beginners" - Programming with Mosh](https://www.youtube.com/watch?v=SqcY0GlETPk&t=384s)
    - ["Full Stack React, Node & MongoDB - Build A Sign Up Application (React, Node.js, Express and MongoDB)" - Dev and Design](https://www.youtube.com/watch?v=SQqSMDIzhaE&list=PL8bqMzhLLaIwhfbf6RnUSDDQYkom0TU2V)
    - ["React Save Form Data to MongoDB Database | React JS Hook Form POST Submission to Backend API Example" - Coding Money](https://www.youtube.com/watch?v=86uXSFm3ND0&list=PL8bqMzhLLaIwhfbf6RnUSDDQYkom0TU2V&index=2)
    - ["Deploy A Fullstack REACT APP on AWS EC2" - Koding 101](https://www.youtube.com/watch?v=vmty50KJg08&list=PL8bqMzhLLaIwhfbf6RnUSDDQYkom0TU2V&index=3)
    - ["How To Deploy MERN Stack App To Production" - Coding Mastery](https://www.youtube.com/watch?v=OVhHxNeOSl0&list=PL8bqMzhLLaIwhfbf6RnUSDDQYkom0TU2V&index=4)
