class CalendarsController < ApplicationController

    def index

        @events = Event.all
      
      end

    def show
        @event = Event.all
    end
    def new
        @events = Event.new
      end
      
      def create
      Event.create(event_params)
    #   redirect_to '/'
      end

      private
      
      def event_params
        params.require(:event).permit(:start_date, :end_date, :description)
      end
end
