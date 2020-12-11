class Api::ClipsController < ApplicationController

    def index
        @clips = Clip.all()
    end
    
    def show
        @clip = Clip.find_by(id: params[:id])
    end

    def create
        @clip = Clip.new(clip_params)
        @clip.channel_id = Channel.first.id
        # remove this later ^
        
        if @clip.save
            render :show
        else
            render json: @clip.errors.full_messages
        end
    end

    def destroy
        @clip = Clip.find_by(id: params[:id])
    end

    private

    def clip_params
        params.require(:clip).permit(:channel_id, :category, :title, :video_clip)
    end

end