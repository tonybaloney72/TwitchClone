class Api::ClipsController < ApplicationController

    before_action :require_logged_in, only: [:create, :destroy]

    def index
        @clips = Clip.all()
    end
    
    def show
        @clip = Clip.find_by(id: params[:id])
    end

    def create
        @clip = Clip.new(clip_params)
        # @clip.user_id = User.first.id
        # remove this later ^ add back down in params v
        
        if @clip.save
            render :show
        else
            render json: @clip.errors.full_messages, status: 400
        end
    end

    def destroy
        @clip = Clip.find_by(id: params[:id])
        @clip.destroy
        render json: @clip.id
    end

    private

    def clip_params
        params.require(:clip).permit(:user_id, :category, :title, :video_clip)
    end

end