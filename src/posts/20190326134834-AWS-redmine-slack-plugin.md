---
title: 'AWS 에 redmine + slack plugin 설치'
date: '2019-03-26 13:48:34'
---

스타트업이니까 AWS freetier 를 이용하자.

AWS EC2 에서 redmine 검색

redmine 4 에서는 slack plugin 이 잘 안되서
`bitnami-redmine-3.3.0-0-linux-ubuntu-14.04.3-x86_64-hvm-ebs` 이미지로 시작하였음

t2.micro 로 바꾸고, pem 파일 받아놓는 거 외에는 다 default 로 처리

다 설치되면 user/bitnami 로 로그인[^1] 후 설정같은거 바꾼다. 특히 언어는 한국어로;;

https://kyungseop.tistory.com/3 대로 따라하면 되는데, plugin 설치하는 부분이 말은 많지만 결국은 putty[^2] 로 들어가서 root 권한[^3]으로
아래와 같이 하면 된다는 거다.

```shell
$ sudo su
$ cd /home/bitnami/apps/redmine/htdocs/plugins
$ git clone https://github.com/sciyoshi/redmine-slack.git redmine_slack
$ bundle install --no-deployment
$ bundle exec rake redmine:plugins:migrate RAILS_ENV=production
$ /opt/bitnami/ctlscript.sh restart
```

하라는 것임

[^1]: redmine 4 일 때는 log 를 보고 user 의 암호를 알아내야 한다. log 는 https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/instance-console.html 를 참고
[^2]: `putty`로 AWS 접속은 https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/putty.html 를 참고
[^3]: `sudo su` 는 https://aws.amazon.com/ko/premiumsupport/knowledge-center/set-change-root-linux/ 를 참고
