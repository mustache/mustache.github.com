require 'net/http'

task :default => :test
task :test do
  # nothing
end

namespace :build do
  desc "Update man pages"
  task :man do
    uri = URI("https://raw.githubusercontent.com")
    Net::HTTP.start(uri.host, uri.port, :use_ssl => true) do |http|
      [1, 5].each do |page|
        resp = http.get("/mustache/mustache/master/man/mustache.#{page}.html")
        open("mustache.#{page}.html", "w") do |file|
          header = <<-EOS.gsub(/^ */, '')
            <!DOCTYPE html>
            <!--

            Hello contributor! This page is automatically generated from the Mustache
            man pages. Rather than sending a pull request to change this file, you
            should update the source:

            https://github.com/mustache/mustache/blob/master/man/mustache.#{page}.ron

            -->
          EOS

          file << resp.body.sub(/^<!DOCTYPE html>\n/, header)
        end
      end
    end
  end
end

desc "Build the whole site"
task :build => [ "build:man" ]
