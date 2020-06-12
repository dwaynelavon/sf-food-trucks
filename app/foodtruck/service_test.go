package foodtruck

import (
	"context"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"go.uber.org/zap/zaptest"
)

/* ----- tests ----- */
func TestFoodTruckService_NearbySuccess(t *testing.T) {
	facade := newMockFacade(nil)

	service := NewService(zaptest.NewLogger(t), facade)

	nearbyFoodTrucks, err := service.Nearby(context.Background(), 37.7806943774082, -122.409668813219)

	// Expect mocked functions to be called
	assert.Nil(t, err)
	assert.Equal(t, 0.0, nearbyFoodTrucks[0].SourceDistance)
	facade.AssertExpectations(t)
}

/* ----- mocks ----- */
var mockFoodTrucks = []FoodTruck{
	{
		ObjectID:  "1334819",
		Latitude:  "37.7275665375917",
		Longitude: "-122.432969701989",
	},
	{
		ObjectID:  "1334734",
		Latitude:  "37.7806943774082",
		Longitude: "-122.409668813219",
	},
}

type mockFacade struct {
	mock.Mock
}

func (m *mockFacade) GetAll(ctx context.Context) ([]FoodTruck, error) {
	args := m.Called()
	foodTrucks := args.Get(0).([]FoodTruck)
	return foodTrucks, args.Error(1)
}

func newMockFacade(returnedError error) *mockFacade {
	f := &mockFacade{}
	f.On("GetAll", mock.Anything).Return(mockFoodTrucks, returnedError)
	return f
}
