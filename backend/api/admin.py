from django.contrib import admin
from api.models import Journal, Month, Goal, Habit, DailyHabit

admin.site.register(Journal)
admin.site.register(Month)
admin.site.register(Goal)
admin.site.register(Habit)
admin.site.register(DailyHabit)
