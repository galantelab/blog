source "https://rubygems.org"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem "github-pages", "~> 228", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-seo-tag"
  gem "jekyll-archives"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# To use retry middleware with Faraday v2.0+
gem "faraday-retry"

# Fix 'cannot load such file -- webrick (LoadError)'
gem "webrick"

# Fix 'cannot load such file -- json (LoadError)'
gem "json"

# Fix 'rubygems version >= 3.3.22'
gem "ffi", "< 1.17.0"

# Bibliography
gem "jekyll-scholar", group: :jekyll_plugins
