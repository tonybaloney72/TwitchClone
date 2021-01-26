class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            photo = File.open(Rails.root + 'app/assets/images/genericUserLogo.png')
            @user.channel_photo.attach(io: photo, filename:'genericUserLogo.png')
            render :info
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
    end

    def index
        @users = User.all()
    end
    
    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
