Rails.application.routes.draw do

  root 'calendars#index'
  get '/calendars', to: 'calendars#index'
  get '/calendars/:id', to:'calendars#show', as: 'artist'
  resources :calendars

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
