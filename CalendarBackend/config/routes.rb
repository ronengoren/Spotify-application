Rails.application.routes.draw do

  root 'calendars#index'
  get '/auth/spotify/callback', to: 'events#spotify'

  resources :calendars
  resources :events

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
