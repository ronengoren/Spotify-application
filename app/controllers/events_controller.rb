class EventsController < ApplicationController
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
    #   redirect_to '/events'
      end
      
      def edit
        # @students = Student.find(params[:id])
      end
      
      def update
        # @students = Student.find(params[:id])
        # @students.update(student_params)
        # redirect_to '/students'
      
          end
      
      def destroy
        # Student.find(params[:id]).destroy
        # redirect_to '/students'
      end
      
      
      private
      
      def event_params
        params.require(:event).permit(:start_date, :end_date, :description)
      end



end
