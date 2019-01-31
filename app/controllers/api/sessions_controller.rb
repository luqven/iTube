class Api::SessionsController < ApplicationController
  def index
    redirect_to :create
  end

  def create
    creds = session_params
    @user = User.find_by_credentials(creds[:username], creds[:password])
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

  def session_params
    params.require(:user).permit(:username, :password)
  end
end