module Api
    module V1
        class EventsController < ApplicationController


            def  index
                @events = Event.order('start_date DESC')
                render json: {status: 'SUCCESS', message:'Loaded events', data:@events}, status: :ok

            end

            def show
                @event = Event.find(params[:id])
                render json: {status: 'SUCCESS', message:'Loaded event', data:@event}, status: :ok

            end

            def create
                @event = Event.new(event_params)
                if @event.save
                    render json: {status: 'SUCCESS', message:'Loaded event', data:@event}, status: :ok
                else

                    render json: {status: 'ERROR', message:'Event not saved', data:@event.errors}, status: :unprocessable_entity
                end

              
            end

            def destroy
                @event = Event.find(params[:id])
                @event.destroy
                render json: {status: 'SUCCESS', message:'Deleted Event', data:@event}, status: :ok


            end

            def update
              @event = Event.find(params[:id])
              if @event.update_attributes(event_params)
                render json: {status: 'SUCCESS', message:'Updated event', data:@event}, status: :ok
              else
                render json: {status: 'ERROR', message:'Event not updated', data:@event.errors}, status: :unprocessable_entity

            end
        end
            
            private

            def event_params
                params.permit(:description, :start_date, :end_date )

            end
  

        end
    end

end