class Api::MessagesController < ApplicationController

    # before_action :require_logged_in!, only: [:create]

    def index
        @clip = Clip.find(params[:clip_id])
        @clip_messages = @clip.messages
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