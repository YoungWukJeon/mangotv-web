FROM digitalgenius/ubuntu-node-chrome-selenium

RUN git clone https://github.com/YoungWukJeon/mangotv-web.git

COPY . mangotv-web
WORKDIR mangotv-web

RUN npm install

EXPOSE 3000
CMD npm run dev