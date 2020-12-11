class Api::ChannelsController < ApplicationController

    def show
        @channel = Channel.find_by(id: params[:id])
    end

    def index
        @channels = Channel.all()
    end
    
end