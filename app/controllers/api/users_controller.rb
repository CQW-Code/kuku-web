class Api::UsersController < Api::ApiController

  def update
		# user = User.find(params[:id])
		# user.name = params[:name]
		# user.email = params[:email]
    # user.password = params[:password]
    
    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: { errors: @user.errors.full_messages }, status: 422
      end
    end
    private

    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
end

	end