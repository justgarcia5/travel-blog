Rails.application.routes.draw do

  resources :posts

  get '/*path', to: 'pages#index', constraints: ->(request){ request.format.html? }

  root to: 'pages#index'
end
