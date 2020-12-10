class Api::ChannelsController < ApplicationController

    def show
        @channel = Channel.find_by(id: params[:id])
    end
    
end