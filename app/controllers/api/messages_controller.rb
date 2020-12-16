class Api::MessagesController < ApplicationController

    # before_action :require_logged_in!, only: [:create]

    def index
        @messages = Message.all()
    end

    def show
        @message = Message.find_by(id: params[:id])
    end

    def create
        @message = Message.new(message_params)

        if @message.save
            render :show
        end
    end

    private
    
    def message_params
        params.require(:message).permit(:user_id, :body, :clip_id)
    end
end