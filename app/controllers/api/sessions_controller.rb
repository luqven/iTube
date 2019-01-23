class Api::SessionsController < ApplicationController
  def index
    redirect_to :create
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['User not found.'], status: 401
    else
      login!(@user)
      render 'api/users/show';
    end
  end

  def destroy
    logout!
    render json: { message: 'Logged out' }
  end
end