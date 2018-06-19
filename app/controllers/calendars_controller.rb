class CalendarsController < ApplicationController

    def index

        @events = Event.all
       
        @dates = Event.select('start_date')
        @specificdate = Event.where(:start_date => "2018-06-22")
      end
      

    def show
        @event = Event.all
        
        
    end
    def new
        @events = Event.new
      end
      
      def create
      Event.create(event_params)
      redirect_to calendars_path
      puts "Thanks for submitting these questions"
    else
      return calendars_path
    
      end

      private
      
      def event_params
        params.require(:event).permit(:start_date, :end_date, :description)
      end
end
