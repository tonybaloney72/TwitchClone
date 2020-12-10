class Api::ClipsController < ApplicationController

    def show
        @clip = Clip.find_by(id: param[:id])
    end

    def create
        @clip = Clip.new(clip_params)

        if @vod.save
            render :show
        else
            render json: @clip.errors.full_messages
        end
    end

    private

    def clip_params
        params.require(:clip).permit(:channel_id, :category, :title, :video_clip)
    end

end