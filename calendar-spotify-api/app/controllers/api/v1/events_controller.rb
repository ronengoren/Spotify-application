module Api
    module V1
        class EventsController < ApplicationController
          before_action :set_event, only: [:show, :destroy] 
  
          def index
          render json: Event.order(:start_date)
          end 
  
           def create
              @event = Event.create(event_params)
              if @event.save
               render json: @event, status: 201
               else
               render json: { errors: @event.errors.full_messages }, status: 422
              end
            end 
  
            def show
               render json: @event = Event.find(params[:id]) 
            end 
  
            def destroy
              @event.destroy
               render :show, status: :ok
            end 
  
            private
             def set_event
              @event = Event.find(params[:id])
            end 
  
            def event_params
              params.permit(:title, :start_date, :end_date)
            end 
        end 
    end 
end 