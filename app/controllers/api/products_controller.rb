class Api::ProductsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Product.all
  end

  def my_products
    render json: User.loved(current_user.loved_products)
  end

  def update
    current_user.loved_products << params[:id].to_i
    current_user.save
  end

end
