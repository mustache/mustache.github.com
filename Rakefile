require 'net/http'

task :default => :test
task :test do
  # nothing
end

namespace :build do
  desc "Build JavaScript"
  task :coffee do
    sh "coffee --no-wrap *.coffee"
  end
end

desc "Build the whole site"
task :build => [ "build:coffee" ]

desc "Publish gh-pages to GitHub"
task :publish do
  sh "git push origin gh-pages"
end
