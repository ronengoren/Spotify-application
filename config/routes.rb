Rails.application.routes.draw do

  root 'calendars#index'

  resources :calendars
  resources :events

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
