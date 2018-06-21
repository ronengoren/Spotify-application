require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "f9c5bffb89904a7c85852a414fcf44fd", "3f8b6573751140f2a1c65300e8d63e83", scope: 'user-read-email playlist-modify-public user-library-read user-library-modify'
end