Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do 
      resources :posts, param: :id
    end
  end

  get '*path', to: 'post#index', via: :all
end
