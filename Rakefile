require 'net/http'

task :default => :test
task :test do
  # nothing
end

desc "Update man pages"
task :man do
  uri = URI("https://raw.github.com")
  Net::HTTP.start(uri.host, uri.port, :use_ssl => true) do |http|
    [1, 5].each do |page|
      resp = http.get("/defunkt/mustache/master/man/mustache.#{page}.html")
      open("mustache.#{page}.html", "w") { |file| file.write(resp.body) }
    end
  end
end

namespace :build do
  desc "Build JavaScript"
  task :coffee do
    sh "coffee --no-wrap *.coffee"
  end
end

desc "Build the whole site"
task :build => [ "build:coffee", :man ]

desc "Publish gh-pages to GitHub"
task :publish do
  sh "git push origin gh-pages"
end
