class CartsController < ApplicationController
  #not sure if this should be here if cart will use all
  #functions

  before_action :set_cart
  
  def index
    render json: Cart.all
  end

  def show
    render json: @cart
  end

  #adding items to cart
  def create
    cart = Cart.create(cart_params)
    if Cart.save
      render json: cart
    else
      render json: {errors: app.errors.full_messages.join(',')}, status: 422
    end
  end

  #update items in cart- like changing total # of items
  def update
    if @cart.update(cart_params)
      render json: @cart
    else
      render json: {errors: app.errors.full_messages.join(',')}, status: 422
    end
  end

  #remove/delete an item from the cart
  def destroy
    @cart.destroy
  end
end

private

def cart_params
  params.require(:cart).permit(:add_date, :items_count, :total_price)
end

def set_cart 
  @cart = Cart.find(params[:id])
end