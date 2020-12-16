class Api::MessagesController < ApplicationController

    before_action :require_logged_in!, only: [:create]

    def index
        @messages = Message.all()
    end

    def create
        @message = Message.new(message_params)

        if @message.save
            render :show
        else
            render :json @message.errors.full_messages, status: 403
        end
    end

    private
    
    def message_params
        params.require(:message).permit(:user_id, :clip_id, :body)
    end
end