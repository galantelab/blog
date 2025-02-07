FROM ruby:2.7.2

RUN bundle config --global frozen 1

WORKDIR /usr/srv/app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve"]
