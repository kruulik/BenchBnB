class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
      # need status so auth knows the user is invalid 
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
